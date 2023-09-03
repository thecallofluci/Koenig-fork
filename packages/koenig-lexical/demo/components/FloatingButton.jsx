import React from 'react';

const FloatingButton = ({isOpen, ...props}) => {
    return (
        <div className={`fixed bottom-4 right-6 z-20 rounded px-2 py-1 font-mono text-sm tracking-tight text-lucigray transition-all duration-200 ease-in-out bg-luci dark:text-luci dark:bg-lucigray ${isOpen ? 'text-black' : 'bg-luci'}`}>
            <button className="cursor-pointer" type="button" onClick={() => props.onClick('json')}>
                JSON output
            </button>
            &nbsp;|&nbsp;
            <button className="cursor-pointer" type="button" onClick={() => props.onClick('tree')}>
                State tree
            </button>
        </div>
    );
};

export default FloatingButton;
