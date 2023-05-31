import RefundCard from '@/components/Order/RefundCard';
import RefundForm from '@/components/Order/RefundForm';

export default function Home() {
    return (
        <div className="container flex flex-col gap-[30px] lg:flex-row">
            <div className="order-2 lg:w-3/5 lg:order-1">
                <RefundForm />
            </div>
            <div className="order-1 w-full max-w-lg lg:w-2/5 lg:order-2">
                <RefundCard />
            </div>
        </div>
    );
}
