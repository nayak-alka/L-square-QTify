import rightArrow from "../../assets/right.png";

export default function RightNavigation({ className }) {
  return (
    <button className={className} type="button">
      <img src={rightArrow} alt="Right Arrow" />
    </button>
  );
}
