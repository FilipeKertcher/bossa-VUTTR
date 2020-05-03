import ITool from "models/tool";
import rootStore from "stores/rootStore";
import { ToolsReducerActions } from "stores/ducks/tools";
import api from "services/api";

export function addTool(tool: ITool) {
  return {
    type: ToolsReducerActions.ADD_TOOL,
    item: tool,
    meta: {
      offline: {
        effect: {
          url: `/tools`,
          method: "POST",
          data: tool,
        },
      },
    },
  };
}

export async function removeTool(tool: ITool) {
  rootStore.dispatch({
    type: ToolsReducerActions.REMOVE_TOOL,
    item: tool,
    meta: {
      offline: {
        effect: {
          url: `/tools/${tool.id}`,
          method: "DELETE",
        },
      },
    },
  });
}

export async function listTools({
  name,
  tagSearch,
}: {
  name?: string;
  tagSearch?: boolean;
}) {
  try {
    const url = !!name
      ? `/tools?${!!tagSearch ? "tags_like" : "q"}=${name}`
      : `/tools`;

    const tools = await api.get(url);

    return {
      type: ToolsReducerActions.UPDATE_TOOL_LIST,
      item: null,
      items: tools.data,
    };
  } catch (error) {}
}
