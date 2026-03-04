import styles from './Pagination.module.css'

interface PaginationProps {
  offset: number
  total: number
  pageSize: number
  onPrevious: () => void
  onNext: () => void
  disabled?: boolean
}

export const Pagination = ({
  offset,
  total,
  pageSize,
  onPrevious,
  onNext,
  disabled = false,
}: PaginationProps) => {
  const currentPage = Math.floor(offset / pageSize) + 1
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  return (
    <div className={styles.pagination}>
      <button type="button" onClick={onPrevious} disabled={disabled || offset === 0}>
        ← Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button type="button" onClick={onNext} disabled={disabled || offset + pageSize >= total}>
        Siguiente →
      </button>
    </div>
  )
}
