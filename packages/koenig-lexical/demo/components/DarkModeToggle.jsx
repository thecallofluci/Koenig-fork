
const DarkModeToggle = ({darkMode, toggleDarkMode}) => {
    return (
        <>
            <button className="absolute right-20 top-4 z-20 block cursor-pointer rounded bg-white px-2 py-1 font-mono text-sm tracking-tight text-grey-600 dark:bg-transparent" type="button" onClick={toggleDarkMode}>
                {darkMode ? 'dark' : 'light'}
            </button>
        </>
    );
};

export default DarkModeToggle;



// Original
// const DarkModeToggle = ({darkMode, toggleDarkMode}) => {
//    return (
//        <>
//            <button className="absolute right-20 top-4 z-20 block h-[22px] w-[42px] cursor-pointer rounded-full transition-all ease-in-out" type="button" onClick={toggleDarkMode}>
//                {darkMode ? 'dark' : 'light'}
//            </button>
//        </>
//    );
//};

//export default DarkModeToggle;




// Changes to ToggleButton
// const WordCount = ({wordCount}) => {
//    return (
//        <div className="absolute left-6 top-4 z-20 block cursor-pointer rounded bg-white px-2 py-1 font-mono text-sm tracking-tight text-grey-600 dark:bg-transparent">
//            <span data-testid="word-count">{wordCount}</span> words
//        </div>
//    );
//};

// export default WordCount;

