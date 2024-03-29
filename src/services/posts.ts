import { getRecordMap, mapImageUrl } from "~/libs/notion";
import { type Post } from "~/types/post";

export async function getAllPostsFromNotion() {
  try {
    const allPosts: Post[] = [];
    const recordMap = await getRecordMap(process.env.NOTION_DATABASE_ID!);
    const { block, collection } = recordMap;
    const schema = Object.values(collection)[0]?.value.schema;
    const propertyMap: Record<string, string> = {};

    if (!schema) throw new Error("No schema found in Notion database.");

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
    console.error("Error fetching posts from Notion", err);
  }
}
