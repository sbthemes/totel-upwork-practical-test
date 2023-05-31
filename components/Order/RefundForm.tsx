'use client';

import Image from 'next/image';
import IconPlus from '../Icon/IconPlus';
import RefundConfirmation from './RefundConfirmation';
import { useRef } from 'react';
import Modal from '../Modal';

const RefundForm = () => {
    const modal = useRef<any>(null);

    return (
        <>
            <form>
                <h2 className="text-2xl font-semibold leading-tight sm:text-[32px]">Cancel Your Reservation</h2>
                <h3 className="mt-7 text-xl font-medium sm:text-2xl">Why are you looking to cancel?</h3>
                <div className="mt-4 space-y-2 text-base">
                    <label className="inline-flex w-full items-center">
                        <input name="reason" type="radio" className="form-radio" />
                        <span className="ml-2.5">My place is unavailable</span>
                    </label>
                    <label className="inline-flex w-full items-center">
                        <input name="reason" type="radio" className="form-radio" />
                        <span className="ml-2.5">I’m looking for a different price or trip length</span>
                    </label>
                    <label className="inline-flex w-full items-center">
                        <input name="reason" type="radio" className="form-radio" />
                        <span className="ml-2.5">
                            I’m uncomfortable with the reservation or the guest has broken my House Rules
                        </span>
                    </label>
                    <label className="inline-flex w-full items-center">
                        <input name="reason" type="radio" className="form-radio" />
                        <span className="ml-2.5">My guest needs to cancel</span>
                    </label>
                    <label className="inline-flex w-full items-center">
                        <input name="reason" type="radio" className="form-radio" />
                        <span className="ml-2.5">Other</span>
                    </label>
                </div>

                <p className="mt-10 text-[#6B7B8F]">
                    By selecting the button below, I agree to the House Rules, Safety Disclosures, Social-distancing and
                    other Covid-19-related guidelines, and Guest Refund Policy. I also agree to pay the total amount
                    shown, which includes Occupancy Taxes and Service Fees. Now collects, remits government-imposed
                    Occupancy Taxes in this location.
                </p>

                <div className="mt-9 rounded-[10px] border border-neutral-700 p-8">
                    <div className="flex flex-col items-center rounded-[10px] bg-primary px-2 py-4 text-white sm:flex-row sm:px-5">
                        <span className="text-2xl font-semibold">Your Refund Amount</span>
                        <span className="mt-4 text-[32px] font-bold sm:ml-auto sm:mt-0">$420</span>
                    </div>
                    <div className="mt-8">
                        <div className="flex items-center">
                            <span className="text-[17px] font-semibold">Debit/Credit Card</span>
                            <button
                                type="button"
                                className="group ml-auto flex items-center text-[15px] font-semibold text-primary"
                            >
                                <span className="group-hover:underline">Add New Card</span>
                                <IconPlus />
                            </button>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-center">
                                <Image width={28} height={17} src="/img/master-card.svg" alt="ms" />
                                <span className="ml-3 text-[15px] font-semibold">**** **** **** 1728</span>
                                <div className="ml-auto">
                                    <input name="refund-card" type="radio" className="form-radio h-7 w-7" />
                                </div>
                            </div>
                        </div>

                        <p className="my-5 border-t border-[#F2F2F7]"></p>

                        <div className="mt-6">
                            <div className="flex items-center">
                                <Image width={28} height={17} src="/img/western-union.svg" alt="ms" />
                                <span className="ml-3 text-[15px] font-semibold">**** **** **** 2930</span>
                                <div className="ml-auto">
                                    <input name="refund-card" type="radio" className="form-radio h-7 w-7" />
                                </div>
                            </div>
                        </div>

                        <p className="my-5 border-t border-[#F2F2F7]"></p>

                        <div className="mt-6">
                            <div className="flex items-center">
                                <Image width={28} height={17} src="/img/visa.svg" alt="ms" />
                                <span className="ml-3 text-[15px] font-semibold">**** **** **** 3423</span>
                                <div className="ml-auto">
                                    <input name="refund-card" type="radio" className="form-radio h-7 w-7" />
                                </div>
                            </div>
                        </div>

                        <p className="mt-5 border-t border-[#F2F2F7]"></p>
                    </div>
                </div>

                <h2 className="mt-8 text-2xl font-semibold leading-tight sm:text-[32px]">
                    Cancellation & Refund policy
                </h2>
                <div className="mt-8 text-[#6B7B8F]">
                    <p>
                        Free cancel anon until 3:00 PM on Dec 26. After that, cancel before 3:00 PM on Dec Mend get a
                        50% refund, minus the first night and service fee.{' '}
                        <a href="#" className="text-black underline">
                            Learn more
                        </a>
                    </p>

                    <p className="mt-4 font-medium text-black">
                        Make sure this host’s cancellation policy works for you.
                    </p>

                    <p>
                        For reservations made after March14, COVID-19 will not qualify as an extenuating circumstance.{' '}
                        <a href="#" className="text-black underline">
                            Learn more
                        </a>
                    </p>

                    <p className="my-5 border-t border-neutral-700"></p>

                    <p>
                        You’re booking on New Year’s Eve,so we went to remind you that parties aren’t allow. under
                        Parties and Events policy.{' '}
                        <a href="#" className="text-black underline">
                            Learn more
                        </a>
                    </p>
                    <p className="mt-4">
                        <label className="inline-flex w-full items-center">
                            <input name="reason" type="checkbox" className="form-checkbox" />
                            <span className="ml-2.5">
                                I Understand that any violation of this policy may result in the removal of my account
                                and/or legal action.
                            </span>
                        </label>
                    </p>

                    <p className="my-5 border-t border-neutral-700"></p>

                    <p className="mt-4">
                        By selecting the button below, I agree to the{' '}
                        <a href="#" className="text-primary underline">
                            House Rules
                        </a>
                        ,{' '}
                        <a href="#" className="text-primary underline">
                            Safety Disclosures
                        </a>
                        ,{' '}
                        <a href="#" className="text-primary underline">
                            Social-distancing and other Covid-19-related guidelines
                        </a>
                        , and{' '}
                        <a href="#" className="text-primary underline">
                            Guest Refund Policy
                        </a>
                        . I also agree to pay the total amount shown, which includes{' '}
                        <a href="#" className="text-primary underline">
                            Occupancy Taxes
                        </a>{' '}
                        and Service Fees. Now collects, remits government-imposed Occupancy Taxes in this location.
                    </p>

                    <p className="mt-8">
                        <button
                            type="button"
                            className="btn border-[#F2F2F7] bg-[#F2F2F7] px-12 py-[9px] text-lg"
                            onClick={() => modal?.current.open()}
                        >
                            Apply for Refund
                        </button>
                    </p>
                </div>
            </form>
            <Modal ref={modal} width="748px" showClose={false}>
                <RefundConfirmation />
            </Modal>
        </>
    );
};

export default RefundForm;
