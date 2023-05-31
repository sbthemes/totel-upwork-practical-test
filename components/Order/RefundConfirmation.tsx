import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

const RefundConfirmation = () => {
    return (
        <div className="sm:px-8 sm:py-4">
            <div className="flex justify-between gap-4 text-2xl font-semibold">
                <div>Refund Intiated</div>
                <div className="text-right">$420</div>
            </div>

            <div className="mt-2.5 flex justify-between gap-4 font-light text-[#818181]">
                <div>Order ID : 123ahr970b5i35</div>
                <div className="text-right">Transaction ID : 123ahr970b5i35</div>
            </div>

            <p className="my-5 border-t border-neutral-700"></p>
            <div className="mt-10 flex justify-center sm:mt-16">
                <Image width={240} height={240} src="/img/icon-true.svg" alt="true" />
            </div>

            <h3 className="mt-10 text-center text-2xl font-semibold leading-tight sm:mt-16 sm:text-[30px]">
                Your Refund has been Initated!
            </h3>
            <p className="mt-4 text-center text-2xl text-[#818181] sm:mt-8 sm:text-[25px]">Refund Cash to card</p>

            <p className="my-5 border-t border-neutral-700"></p>

            <p className="text-center text-[#6B7B8F]">
                By selecting the button below, I agree to the House Rules, Safety Disclosures, Social-distancing and
                other Covid-19-related guidelines, and Guest Refund Policy. I also agree to pay the total amount shown,
                which includes Occupancy Taxes and Service Fees. Now collects, remits government-imposed Occupancy Taxes
                in this location.
            </p>

            <div className="mt-16 space-x-6 text-center">
                <button type="button" className="btn btn-primary">
                    Contact Us
                </button>
                <Dialog.Close asChild>
                    <button type="button" className="btn w-28 justify-center">
                        Close
                    </button>
                </Dialog.Close>
            </div>
        </div>
    );
};

export default RefundConfirmation;
