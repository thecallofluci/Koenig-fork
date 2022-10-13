export const CardMenuSection = ({label, ...props}) => {
    return (
        <div className="mb-2 flex shrink-0 flex-col justify-center px-4 pt-3 text-xs font-medium uppercase tracking-[.06rem] text-grey" style={{minWidth: 'calc(100% - 3.2rem)'}} {...props}>
            {label}
        </div>
    );
};

export const CardMenuItem = ({label, desc, Icon, ...props}) => {
    return (
        <div className="flex cursor-pointer flex-row items-center border border-transparent px-4 py-2 text-grey-800 hover:bg-grey-100" {...props}>
            <div className="flex items-center">
                <Icon className="w7 h7" />
            </div>
            <div className="flex flex-col">
                <div className="m-0 ml-4 truncate text-[1.3rem] font-normal leading-[1.333em] tracking-[.02rem] text-grey-900">{label}</div>
                <div className="m-0 ml-4 truncate text-xs font-normal leading-[1.333em] tracking-[.02rem] text-grey">{desc}</div>
            </div>
        </div>
    );
};

export const CardSnippetItem = ({label, Icon, ...props}) => {
    return (
        <div className="flex cursor-pointer flex-row items-center border border-transparent px-4 py-2 text-grey-800 hover:bg-grey-100" {...props}>
            <div className="flex items-center">
                <Icon className="w7 h7" />
            </div>
            <div className="flex flex-col">
                <div className="m-0 ml-4 truncate text-[1.3rem] font-normal leading-[1.333em] tracking-[.02rem] text-grey-900">{label}</div>
            </div>
        </div>
    );
};

export const CardMenu = ({children}) => {
    return (
        <div className="z-[9999999] m-0 mb-3 max-h-[376px] w-[312px] flex-col overflow-y-auto rounded-lg bg-white bg-clip-padding p-0 pt-0 text-sm shadow">
            {children}
        </div>
    );
};