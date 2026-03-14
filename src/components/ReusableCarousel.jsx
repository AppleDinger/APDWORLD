function ReusableCarousel({ items, className = '', renderItem }) {
  return (
    <section className={`reusable-carousel ${className}`.trim()} aria-label="Reusable Carousel">
      {items.map((item) => (
        <article key={item.id} className="carousel-slide">
          {renderItem(item)}
        </article>
      ))}
    </section>
  )
}

export default ReusableCarousel
