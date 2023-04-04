import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"


function FilterSearch() {
    return (
        <>
            <div className="flex flex-col">
                <div className="w-[200px] mt-[30px]">
                    <p className="font-black text-2xl font-[delicious]">Categories</p>
                    <div className="w-full h-[1px] my-3 bg-black" />
                    <div className="flex flex-col space-y-2">
                        <p>Boeken (300)</p>
                        <p>Boeken (300)</p>
                        <p>Boeken (300)</p>
                        <p>Boeken (300)</p>
                        <p>boeken (300)</p>
                    </div>
                </div>
                <div className="w-[200px] mt-[30px]">
                    <p className="font-black text-2xl font-[delicious]">Price</p>
                    <div className="w-full h-[1px] my-3 bg-black" />
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <p>10 - 20</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <p>20 - 100</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <p>100 - 500</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <p>500 - 1000</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <p>1000 - 5000</p>
                        </div>
                    </div>
                </div>
                <div className="w-[200px] h-[40px] mt-[30px]">
                    <div className="bg-black w-full flex items-center justify-between hover:cursor-pointer hover:scale-[1.02] ease-in duration-100 pl-3 pr-1 h-full rounded-full">
                        <p className="text-white">search again</p>
                        <div className="relative w-7 h-7">
                            <MagnifyingGlassCircleIcon/>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
} 

export default FilterSearch
