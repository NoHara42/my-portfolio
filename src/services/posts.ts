import { getRecordMap, mapImageUrl } from "~/libs/notion";
import { type Post } from "~/types/post";

export async function getAllPostsFromNotion() {
  try {
    const allPosts: Post[] = [];
    const recordMap = await getRecordMap(process.env.NOTION_DATABASE_ID!);
    const { block, collection } = recordMap;

    // Debug: Check what we're getting from Notion
    if (!collection || Object.keys(collection).length === 0) {
      console.error("Notion recordMap collection is empty. Keys in recordMap:", Object.keys(recordMap));
      console.error("Block count:", block ? Object.keys(block).length : 0);
      throw new Error(
        `No collection data returned from Notion. This usually means the NOTION_AUTH_TOKEN (token_v2 cookie) has expired or the database ID is incorrect. ` +
        `RecordMap keys: ${Object.keys(recordMap).join(", ")}`
      );
    }

    // notion-client returns collection with structure: { [id]: { value: { value: {..., schema}, role } } }
    // The schema may be at .value.schema or .value.value.schema depending on the response
    const collectionEntry = Object.values(collection)[0]?.value;
    const schema = collectionEntry?.schema ?? collectionEntry?.value?.schema;
    const propertyMap: Record<string, string> = {};

    if (!schema) {
      console.error("Collection entry:", JSON.stringify(collectionEntry, null, 2));
      throw new Error(
        `No schema found in Notion collection. ` +
        `This may indicate the database structure changed.`
      );
    }

    Object.keys(schema).forEach((key) => {
      propertyMap[schema[key]!.name] = key;
    });

    Object.keys(block).forEach((pageId) => {
      if (
        propertyMap["Slug"] &&
        block[pageId]?.value.type === "page" &&
        (block[pageId]?.value?.properties as Record<string, string>)?.[
          propertyMap["Slug"]
        ]
      ) {
        const blockValue = block?.[pageId]?.value as {
          properties: Record<string, string>;
          last_edited_time: number;
        };

        if (!blockValue) {
          throw new Error(`Block value is undefined for pageId: ${pageId}`);
        }

        const { properties, last_edited_time } = blockValue;

        const contents = block[pageId]?.value.content || [];
        const dates = contents.map((content) => {
          return block[content]?.value?.last_edited_time;
        });
        dates.push(last_edited_time);
        dates.sort((a, b) => Number(b) - Number(a));
        const lastEditedAt = dates[0];

        if (!propertyMap["Page"] || !propertyMap["Date"])
          throw new Error(
            "Missing required date or slug properties in Notion database"
          );

        const id = pageId;
        const slug = properties[propertyMap["Slug"]]?.[0]?.[0];
        const title = properties[propertyMap["Page"]]?.[0]?.[0];

        //TODO: type properties and propertyMap later
        const categories =
          properties[propertyMap["Category"]]?.[0]?.[0]?.split(",");
        const cover = properties[propertyMap["Cover"]]?.[0]?.[1]?.[0]?.[1];
        const date =
          properties[propertyMap["Date"]]?.[0]?.[1]?.[0]?.[1]?.["start_date"];
        const published =
          properties[propertyMap["Published"]]?.[0]?.[0] === "Yes";

        allPosts.push({
          id,
          title,
          slug,
          categories,
          // Fix 403 error for images.
          // https://github.com/NotionX/react-notion-x/issues/211
          cover: mapImageUrl(cover, block[pageId].value) || "",
          date,
          published,
          lastEditedAt,
        });
      }
    });

    return allPosts;
  } catch (err) {
    throw new Error("Error fetching posts from Notion: " + String(err));
  }
}
