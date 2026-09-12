import { useEffect } from 'react'

/**
 * Adds the `is-visible` class to every `[data-reveal]` element once it
 * scrolls into view. Elements can set `data-reveal-delay` (ms) to stagger.
 * Nodes added later (tab switches, conditional renders) are picked up by a
 * MutationObserver so they never stay hidden.
 */
export default function useReveal() {
  useEffect(() => {
    const showAll = () =>
      document.querySelectorAll('[data-reveal]').forEach((n) => n.classList.add('is-visible'))

    if (!('IntersectionObserver' in window)) {
      showAll()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0
            entry.target.style.transitionDelay = `${delay}ms`
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    )

    const watch = (root) => {
      if (root.nodeType !== 1) return
      if (root.matches('[data-reveal]') && !root.classList.contains('is-visible')) io.observe(root)
      root.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((n) => io.observe(n))
    }

    watch(document.body)

    const mo = new MutationObserver((records) => {
      records.forEach((r) => r.addedNodes.forEach(watch))
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
