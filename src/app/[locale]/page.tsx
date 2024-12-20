import { Suspense } from 'react'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'

import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { contacts } from '@/src/lib/contact'
import { locales } from '@/src/locale-config'
import { Link } from '@/src/navigation'

import { Arrow } from '@/src/components/arrow'
import { Avatar } from '@/src/components/avatar'
import { Computer } from '@/src/components/computer'
import { Programming } from '@/src/components/programming'
import { Shine } from '@/src/components/shine'
import { Sparkle } from '@/src/components/sparkle'
import { H2, HS, Paragraph, SectionTitle } from '@/src/components/typography'
import { Button } from '@/src/components/ui/button'

import { ContactForm } from './components/home/contact-form'
import { Curriculum } from './components/home/curriculum'
import { Projects } from './components/home/projects'
import { Techs } from './components/home/techs'

type Props = {
  params: { locale: (typeof locales)[number] }
}

export default function Home({ params: { locale } }: Props) {
  setRequestLocale(locale)

  const t = useTranslations('Home')

  return (
    <main className="container md:px-8 mt-20">
      <div id="start" className="relative pt-36 pb-12 -mt-24 md:py-24">
        <section className="flex flex-col-reverse justify-between items-center gap-6 mx-6 md:flex-row md:gap-32 md:mx-[4.5rem]">
          <div className="flex flex-col gap-8 basis-1/2">
            <HS className="bg-gradient-to-r from-primary-light to-highlight">
              {t('head.sectionTitle')}
            </HS>
            <div className="flex flex-col gap-4">
              <H2>{t('head.title')}</H2>
              <Paragraph>{t('head.paragraph')}</Paragraph>
            </div>
            <div className="flex gap-2 md:gap-4 flex-wrap">
              <Suspense fallback={<Curriculum.Skeleton />}>
                <Curriculum.Root variant="secondary" />
              </Suspense>

              <Button asChild className="gap-2">
                <Link href={{ pathname: '/', hash: 'contact' }}>
                  {t('head.contact')}
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="min-w-full relative md:min-w-0 md:basis-1/2">
            <Computer />
          </div>
        </section>
        <Arrow className="absolute rotate-[135deg] right-[20%] -bottom-8 md:right-[35%] md:bottom-4" />
      </div>

      <div id="about" className="pt-20 -mt-20">
        <section className="flex flex-col gap-10 bg-surface-primary py-12 px-6 md:flex-row md:gap-32 md:p-[4.5rem] md:my-10 md:rounded-2xl">
          <div className="flex flex-col my-auto min-w-full relative md:min-w-0 md:basis-1/2">
            <Programming />
          </div>
          <div className="flex flex-col gap-8 basis-1/2">
            <Suspense fallback={<Techs.Skeleton />}>
              <Techs.Root />
            </Suspense>
            <div className="flex flex-col gap-4">
              <header className="flex flex-col gap-2">
                <SectionTitle className="text-highlight">
                  {t('about.sectionTitle')}
                </SectionTitle>
                <H2>{t('about.title')}</H2>
              </header>
              <Paragraph>{t('about.paragraph')}</Paragraph>
            </div>
            <Suspense fallback={<Curriculum.Skeleton />}>
              <Curriculum.Root />
            </Suspense>
          </div>
        </section>
      </div>

      <section className="overflow-hidden flex flex-col justify-between items-center gap-10 my-12 px-6 md:p-[4.5rem]">
        <header className="flex flex-col items-center text-center gap-2 w-full">
          <SectionTitle className="text-highlight">
            {t('projects.sectionTitle')}
          </SectionTitle>
          <H2>{t('projects.title')}</H2>
        </header>
        <div className="relative w-full">
          <Sparkle className="absolute -top-10 -left-10 md:-top-14 md:-left-12" />
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <Suspense fallback={<Projects.Skeleton />}>
              <Projects.Root />
            </Suspense>
          </ul>
          <Shine className="absolute rotate-[15deg] -bottom-16 -right-8 md:-bottom-32 md:-right-10" />
        </div>
        <Button asChild variant="secondary" className="gap-2">
          <Link href="/projects">
            {t('projects.seeAll')}
            <ArrowRight size={20} />
          </Link>
        </Button>
      </section>

      <div id="contact" className="pt-20 -mt-20">
        <section className="flex flex-col gap-12 bg-surface-primary py-12 px-6 md:flex-row md:gap-32 md:p-[4.5rem] md:my-10 md:rounded-2xl">
          <div className="flex flex-col gap-10 basis-7/12">
            <div className="w-1/2 md:w-1/4">
              <Avatar />
            </div>
            <div className="flex flex-col gap-4">
              <header className="flex flex-col gap-2">
                <SectionTitle className="text-highlight">
                  {t('contact.sectionTitle')}
                </SectionTitle>
                <H2>{t('contact.title')}</H2>
              </header>
              <Paragraph>
                {t('contact.paragraph1')}{' '}
                <Button
                  asChild
                  className="text-highlight p-0 h-min md:p-0"
                  variant="link"
                >
                  <a
                    href="mailto:dev@farrel.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dev@farrel.tech
                  </a>
                </Button>{' '}
                {t('contact.paragraph2')}
              </Paragraph>
              <div className="flex gap-2">
                {contacts.map(({ Icon, title, href }) => (
                  <Button
                    key={title}
                    asChild
                    variant="secondary"
                    size="icon"
                    aria-label={t('contact.aria.social', { social: title })}
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon size={20} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Suspense fallback={<ContactForm.Skeleton />}>
            <ContactForm.Root />
          </Suspense>
        </section>
      </div>
    </main>
  )
}
