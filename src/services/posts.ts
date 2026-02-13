import { getRecordMap, mapImageUrl } from "~/libs/notion";
import { type Post } from "~/types/post";

export async function getAllPostsFromNotion() {
  try {
    const allPosts: Post[] = [];
    const recordMap = await getRecordMap(process.env.NOTION_DATABASE_ID!);
    const { block, collection } = recordMap;

    if (!collection || Object.keys(collection).length === 0) {
      throw new Error(
        "No collection data returned from Notion. The NOTION_AUTH_TOKEN may have expired or the database ID is incorrect."
      );
    }

    // notion-client may return double-nested values: { value: { value: T } }
    // Unwrap to get the actual Collection object
    const rawCollectionEntry = Object.values(collection)[0]?.value;
    const collectionValue =
      rawCollectionEntry?.schema != null
        ? rawCollectionEntry
        : rawCollectionEntry?.value;
    const schema = collectionValue?.schema;
    const propertyMap: Record<string, string> = {};

    if (!schema) throw new Error("No schema found in Notion database.");

    Object.keys(schema).forEach((key) => {
      propertyMap[schema[key]!.name] = key;
    });

    // Detect double-nested block values (same notion-client issue)
    const sampleBlockEntry = Object.values(block)[0];
    const blocksAreDoubleNested =
      sampleBlockEntry?.value?.value?.id != null &&
      sampleBlockEntry?.value?.type == null;

    Object.keys(block).forEach((pageId) => {
      const blockValue = blocksAreDoubleNested
        ? block[pageId]?.value?.value
        : block[pageId]?.value;

      if (
        propertyMap["Slug"] &&
        blockValue?.type === "page" &&
        (blockValue?.properties as Record<string, string>)?.[
          propertyMap["Slug"]
        ]
      ) {
        const { properties, last_edited_time } = blockValue as {
          properties: Record<string, string>;
          last_edited_time: number;
        };

        const contents = blockValue.content || [];
        const dates = contents.map((content: string) => {
          const contentBlock = blocksAreDoubleNested
            ? block[content]?.value?.value
            : block[content]?.value;
          return contentBlock?.last_edited_time;
        });
        dates.push(last_edited_time);
        dates.sort((a: number, b: number) => Number(b) - Number(a));
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
          cover: mapImageUrl(cover, blockValue) || "",
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
