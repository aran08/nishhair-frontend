import Ticker from "react-ticker";;
import Ticker from 'react-awesome-ticker'
export default function Titlebar() {
  return (
    <Ticker className="py-6 border border-black h-[90px]">
      {() => (
        <>
          <span className="font-bold text-3xl px-4 move-true">100% HUMAN HAIR EXTENSION</span>
          <span className="font-bold text-3xl">NISH HAIR MAKES ALL YOUR HAIR DREAMS COMES TRUE</span>
        </>
      )}
    </Ticker>
  );
}
