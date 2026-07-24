import leftArrow from "../../assets/left.png";

export default function LeftNavigation({ className }) {
  return (
    <button className={className} type="button">
      <img src={leftArrow} alt="Left Arrow" />
    </button>
  );
}
