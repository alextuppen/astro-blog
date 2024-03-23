import { createSignal } from "solid-js";
import styles from "./BlogRecipeList.module.scss";
import type { ListItem, Props } from "./BlogRecipeList.types";

export function BlogRecipeListSolid({ list, keywords }: Props) {
  const resetKeywords = keywords != null ? keywords : [];

  const [visibleRecipes, setVisibleRecipes] = createSignal<ListItem[]>(list);
  const [selectedKeywords, setSelectedKeywords] = createSignal<string[]>([]);
  const [visibleKeywords, setVisibleKeywords] =
    createSignal<string[]>(resetKeywords);

  const updateVisibleRecipesAndKeywords = (newSelectedKeywords: string[]) => {
    const newVisisbleRecipes: ListItem[] = [];
    const newVisibleKeywords = new Set<string>();

    list.forEach((item) => {
      const { keywords } = item;

      if (
        keywords != null &&
        newSelectedKeywords.every((kws) => keywords.includes(kws))
      ) {
        newVisisbleRecipes.push(item);
        keywords.forEach((keyword) => {
          newVisibleKeywords.add(keyword);
        });
      }
    });

    setVisibleRecipes(newVisisbleRecipes);
    setVisibleKeywords([...newVisibleKeywords]);
  };

  const handleKeywordClick = (keyword: string) => {
    if (selectedKeywords().includes(keyword)) {
      const newSelectedKeywords = selectedKeywords().filter(
        (arrayWord) => arrayWord !== keyword
      );

      updateVisibleRecipesAndKeywords(newSelectedKeywords);

      setSelectedKeywords(newSelectedKeywords);
    } else {
      const newSelectedKeywords = selectedKeywords().concat(keyword);

      updateVisibleRecipesAndKeywords(newSelectedKeywords);

      setSelectedKeywords(newSelectedKeywords);
    }
  };

  const handleResetClick = () => {
    setVisibleRecipes(list);
    setSelectedKeywords([]);
    setVisibleKeywords(resetKeywords);
  };

  return (
    <>
      {keywords != null && (
        <div>
          <h3>Keyword filter</h3>
          <div>
            {visibleKeywords().map((keyword) => (
              <button onclick={() => handleKeywordClick(keyword)}>
                {keyword}
              </button>
            ))}
          </div>
          <button onclick={handleResetClick}>Reset</button>
        </div>
      )}
      <ol class={styles.list}>
        {visibleRecipes().map(({ href, title, src, alt, description }) => (
          <li class={styles.item}>
            <a href={href} class={styles.linkWrapper}>
              <h2 class={styles.title}>{title}</h2>
              {src != null && alt != null ? (
                <img
                  class={styles.image}
                  width={300}
                  height={300}
                  src={src}
                  alt={alt}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0"
                  height="1em"
                  width="1em"
                  class={`${styles.image} ${styles.placeholder}`}
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"></path>
                </svg>
              )}
              <span class={styles.description}>{description}</span>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}
