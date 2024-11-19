import { createSignal, type JSX } from "solid-js";
import Fuse from "fuse.js";
import styles from "./BlogRecipeList.module.scss";
import type { ListItem, Props } from "./BlogRecipeList.types";
import { Input } from "../Input";
import { NoResultsFound } from "./NoResultsFound";
import { Search } from "../../../svg/Solid";
import { BlogRecipeItem } from "./BlogRecipeItem";

export function BlogRecipeList({ list }: Props) {
  const fuse = new Fuse(list, {
    keys: ["title", "keywords"],
    includeScore: true,
    includeMatches: true,
    threshold: 0.3,
  });

  const searchEnabled = list.some((listItem) => listItem.keywords != null);

  const [visibleListItems, setVisibleListItems] =
    createSignal<ListItem[]>(list);

  const onSearchChange: JSX.EventHandler<HTMLInputElement, InputEvent> = ({
    currentTarget: { value },
  }) => {
    if (value === "" || value == null) {
      setVisibleListItems(list);
      return;
    }

    const searchResult = fuse.search(value);

    const sortedResult = searchResult.sort((a, b) => {
      if (a.score == null && b.score == null) {
        return 0;
      }

      if (a.score == null) {
        return 1;
      }

      if (b.score == null) {
        return -1;
      }

      if (a.score < b.score) {
        return -1;
      } else if (a.score > b.score) {
        return 1;
      } else {
        return 0;
      }
    });

    const finalList = sortedResult.map((result) => result.item);

    setVisibleListItems(finalList);
  };

  return (
    <>
      {searchEnabled != null && (
        <div class={styles.search}>
          <Input
            id="blog-recipe-list-search-input"
            type="text"
            placeholder="Search..."
            onInput={onSearchChange}
            icon={Search}
            onClear={() => setVisibleListItems(list)}
          />
        </div>
      )}
      {visibleListItems().length === 0 ? (
        <NoResultsFound />
      ) : (
        <ol class={styles.list}>
          {visibleListItems().map((item) => (
            <BlogRecipeItem item={item} />
          ))}
        </ol>
      )}
    </>
  );
}
