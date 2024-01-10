export default function Pagination({
  handlePagination,
  resultPerPage,
  filteredResult,
  page,
}) {
  const numberOfPages = Math.ceil(filteredResult / resultPerPage);

  return (
    <section className="flex items-center">
      <p className="pagination" onClick={() => handlePagination(page - 1)}>
        PREV
      </p>
      {page > 1 && numberOfPages > 1 && (
        <p className="pagination" onClick={() => handlePagination(page - 1)}>
          {page - 1}
        </p>
      )}
      <p className="pagination text-red-600">{page}</p>
      {numberOfPages >= page && numberOfPages > 2 && (
        <p className="pagination" onClick={() => handlePagination(page + 1)}>
          {page + 1}
        </p>
      )}
      <p className="pagination" onClick={() => handlePagination(page + 1)}>
        NEXT
      </p>
    </section>
  );
}
