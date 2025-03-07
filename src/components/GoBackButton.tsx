import { useNavigate } from "react-router";

export default function GoBackButton() {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <button className="goBackBtn" onClick={handleNavigateBack}>
      ← Go back
    </button>
  );
}
