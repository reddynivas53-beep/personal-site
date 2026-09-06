import profile from '@/data/profile.json';

/**
 * Measured values used by the stats page.
 *
 * Personal values come from profile.json where available.
 * Birth date is optional so the site does not require personal information
 * that has not been provided.
 */

type ProfileWithOptionalBirthDate = typeof profile & {
  birthDate?: string;
};

const profileData = profile as ProfileWithOptionalBirthDate;

/**
 * Birth date is optional.
 * When it is not available, ageAt() returns a placeholder instead of
 * displaying incorrect or invented information.
 */
export const BIRTH_DATE: string | null = profileData.birthDate ?? null;

/** Milliseconds in an average year, accounting for leap years. */
export const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2421897;

/** Year the first computer arrived in the bedroom. */
export const COMPUTING_SINCE = profile.computingSince;

/** Countries visited to date. */
export const COUNTRIES_VISITED = profile.countriesVisited;

/** Current home city. */
export const CURRENT_CITY = profile.currentCity;

/** Decimal places used by the stats page. */
export const AGE_PRECISION_FULL = 11;

/** Fastest the readout is allowed to advance, in milliseconds. */
export const AGE_MIN_INTERVAL = 25;

/**
 * How often a readout at `precision` decimal places changes.
 */
export function ageIntervalFor(precision: number): number {
  const msPerDigit = MS_PER_YEAR / 10 ** precision;

  return Math.max(AGE_MIN_INTERVAL, Math.floor(msPerDigit));
}

/**
 * Age in years at a given instant.
 *
 * Returns a placeholder when no birth date has been provided.
 */
export function ageAt(now: number, precision: number): string {
  if (!BIRTH_DATE) {
    return agePlaceholder(precision);
  }

  const birthTime = new Date(BIRTH_DATE).getTime();

  if (Number.isNaN(birthTime)) {
    return agePlaceholder(precision);
  }

  return ((now - birthTime) / MS_PER_YEAR).toFixed(precision);
}

/**
 * A same-width placeholder for an age readout.
 */
export function agePlaceholder(precision: number): string {
  return `--.${'-'.repeat(precision)}`;
}