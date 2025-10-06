"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      person_profiles: 'identified_only',
      capture_pageview: false, // Capturamos manualmente para mejor control
      capture_pageleave: true, // Captura cuando el usuario sale de la página
      capture_exceptions: true, // Error tracking habilitado
      session_recording: {
        recordCrossOriginIframes: true,
      },
      autocapture: {
        dom_event_allowlist: ['click', 'submit', 'change'], // Solo eventos importantes
        url_allowlist: [window.location.origin], // Solo nuestro dominio
        element_allowlist: ['a', 'button', 'form', 'input', 'select', 'textarea'], // Solo elementos interactivos
      },
      debug: process.env.NODE_ENV === "development",
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  )
}

// Componente para capturar pageviews
function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return null
}
