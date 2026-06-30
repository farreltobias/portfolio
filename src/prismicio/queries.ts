import * as prismic from '@prismicio/client';
import { createClient } from '@/prismicio/client';
import type {
  AboutDocument,
  CaseStudyDocument,
  ContactDocument,
  HomeDocument,
  InsightDocument,
  InsightsPageDocument,
  NavigationDocument,
  SettingsDocument,
  WorkDocument,
} from '@/prismicio/types';

// ─── Singleton Pages ──────────────────────────────────────────────────────────

export const getHome = (): Promise<HomeDocument> => createClient().getSingle('home');

export const getAbout = (): Promise<AboutDocument> => createClient().getSingle('about');

export const getWork = (): Promise<WorkDocument> => createClient().getSingle('work');

export const getInsightsPage = (): Promise<InsightsPageDocument> =>
  createClient().getSingle('insights_page');

export const getSettings = (): Promise<SettingsDocument> => createClient().getSingle('settings');

export const getNavigation = (): Promise<NavigationDocument> =>
  createClient().getSingle('navigation');

export const getContact = (): Promise<ContactDocument> => createClient().getSingle('contact');

// ─── Case Studies ─────────────────────────────────────────────────────────────

export const getCaseStudies = (): Promise<CaseStudyDocument[]> =>
  createClient().getAllByType('case_study', {
    orderings: [{ field: 'my.case_study.sort_order', direction: 'asc' }],
  });

export const getFeaturedCaseStudies = (): Promise<CaseStudyDocument[]> =>
  createClient().getAllByType('case_study', {
    filters: [prismic.filter.at('my.case_study.is_featured', true)],
    orderings: [{ field: 'my.case_study.sort_order', direction: 'asc' }],
  });

export const getCaseStudyByUID = (uid: string): Promise<CaseStudyDocument> =>
  createClient().getByUID('case_study', uid);

export const getCaseStudyUIDs = async (): Promise<string[]> => {
  const caseStudies = await createClient().getAllByType('case_study', {
    fetch: ['case_study.uid'],
  });
  return caseStudies.map((cs) => cs.uid);
};

// ─── Insights ─────────────────────────────────────────────────────────────────

export const getInsights = (): Promise<InsightDocument[]> =>
  createClient().getAllByType('insight', {
    orderings: [{ field: 'my.insight.published_date', direction: 'desc' }],
  });

export const getLatestInsights = (count = 3): Promise<InsightDocument[]> =>
  createClient().getAllByType('insight', {
    orderings: [{ field: 'my.insight.published_date', direction: 'desc' }],
    limit: count,
  });

export const getInsightByUID = (uid: string): Promise<InsightDocument> =>
  createClient().getByUID('insight', uid);

export const getInsightUIDs = async (): Promise<string[]> => {
  const insights = await createClient().getAllByType('insight', {
    fetch: ['insight.uid'],
  });
  return insights.map((i) => i.uid);
};
