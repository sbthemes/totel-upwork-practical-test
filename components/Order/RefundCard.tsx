import Image from 'next/image';

const RefundCard = () => {
    return (
        <div className="overflow-hidden rounded-[10px] lg:sticky lg:top-24">
            <div>
                <Image width={516} height={342} src="/img/product.png" alt="Product" />
            </div>
            <div className="rounded-b-[10px] border-x border-b border-neutral-700 px-[26px] pb-4 pt-[26px]">
                <div>
                    <div className="inline-flex items-center rounded-full bg-success-100 px-2 py-1 text-[13px] font-medium leading-none text-success-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-success-700"></span>
                        <span className="ml-1">Published</span>
                    </div>
                    <h2 className="mt-1 text-xl font-semibold">Hotel Assenzio Karoeke</h2>
                    <p className="mt-1 font-medium">25 Apr 2023 - 28 Apr 2023</p>
                    <p className="mt-2 text-[#6B7B8F]">
                        But happy to move in with more than that, I’m super easy going and tidy. I’m super easy going
                        and tidy.I’m super easy going and tidy.
                    </p>
                    <table className="mt-4 table w-full table-fixed text-[15px] font-medium">
                        <tbody>
                            <tr>
                                <td>
                                    <p>Ammount you’re paid</p>
                                </td>
                                <td className="text-right">
                                    <span className="text-lg">$420</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Refund pending review</p>
                                    <p className="mt-2 text-xs font-normal text-[#6B7B8F]">
                                        Refund to Visa123*****56497812
                                    </p>
                                </td>
                                <td className="text-right">
                                    <span className="text-lg">$420</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RefundCard;
