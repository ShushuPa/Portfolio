export default function Button({label}: {label: string}) {
 return (
        <button type="button" className="px-6 py-3 md:px-4 md:py-2 dark:bg-sky-950 bg-[#FF833D] text-white font-bold rounded-lg dark:hover:bg-sky-800 hover:bg-[#e5732f] transition cursor-pointer text-base md:text-sm">{label}</button>
    );   
};
