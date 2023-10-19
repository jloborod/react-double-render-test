interface Props {
  isLoading: boolean;
  currentPage: number;
  onNext: () => void;
  onPrevious: () => void;
}

// Just presentation
const Pagination = ({ onNext, onPrevious, currentPage, isLoading }: Props) => {
  return (
    <div className="pagination">
      <button
        className="btn-primary"
        disabled={currentPage === 0 || isLoading}
        onClick={onPrevious}
      >
        Back
      </button>
      <button className="btn-primary" disabled={isLoading} onClick={onNext}>
        Next
      </button>
      {isLoading ? <p>loading...</p> : null}
    </div>
  );
};

export default Pagination;
