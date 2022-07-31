import Button from "../../../shared/button/button";

export default function Cta() {
  return (
    <div className="bg-grayBg">
      <div className="max-w-[700px] mx-auto px-10 py-8 md:py-20 flex flex-col items-center">
        <p className="text-center font-[Uregular] font-bold text-3xl md:text-[43px] mb-4 md:mb-6 text-dark leading-[43px]">
          Ready to grow your business? Start with Apex, become faster every
          second
        </p>
        <Button className="bg-orange text-white px-3 py-2.5 rounded-md">
          Start Chatting Now
        </Button>
      </div>
    </div>
  );
}
