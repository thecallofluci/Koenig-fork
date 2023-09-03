const WordCount = ({wordCount}) => {
    return (
        // original: <div className="absolute left-6 top-4 z-20 block cursor-pointer rounded bg-white px-2 py-1 font-mono text-sm tracking-tight text-grey-600 dark:bg-transparent">
        <div className="absolute left-6 top-4 z-20 block cursor-default rounded bg-luci px-2 py-1 font-mono text-sm tracking-tight text-lucigray dark:text-luci dark:bg-lucigray">
            <span data-testid="word-count">{wordCount}</span> words
        </div>
    );
};

export default WordCount;




