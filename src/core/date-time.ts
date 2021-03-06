import { Weekdays } from '../enums/weekdays.enum';
import { getValidDate } from '../lib/getValidDate/index';
import { getWeekdays } from '../lib/getWeekdays/index';
import { isAfter } from '../lib/isAfter/index';
import { isBefore } from '../lib/isBefore/index';
import { isLeapYear } from '../lib/isLeapYear/index';
import { isSame } from '../lib/isSame/index';
import { isToday } from '../lib/isToday/index';
import { isTomorrow } from '../lib/isTomorrow/index';
import { isWeekday } from '../lib/isWeekday/index';
import { isYesterday } from '../lib/isYesterday/index';
import {DateCompareUnit, DateTimeInput} from '../types/input';

/**
 *
 *
 * @class DateTime
 * @extends {Date}
 */
class DateTime extends Date {
  /**
   * Return an array of all the values of the Weekdays enum
   * @returns An array of Weekdays
   */
  public static getWeekdays(): Weekdays[] {
    const weekdays = getWeekdays();
    return weekdays;
  }

  /**
   * If the year is a valid date, return it. Otherwise, return a new Date object
   * @param {DateTimeInput} year - The year to check.
   * @returns Nothing.
   */
  public static getValidDate(year: DateTimeInput): Date {
    return getValidDate(year);
  }

  /**
   * Given a year, return true if it is a leap year, false otherwise
   * @returns A boolean value.
   */
  public isLeapYear(): boolean { // https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year
    return isLeapYear(this)
  }

  /**
   * @returns a boolean value.
   *  If the day is a weekday, it returns true.
   *  If the day is a weekend, it returns false.
   */
  public isWeekday(): boolean {
    return isWeekday(this)
  }

  /**
   * Returns true if the current date is before the date to compare to
   * @param {DateTimeInput} date - The date to compare to.
   * @returns A boolean value.
   */
  public isBefore(date: DateTimeInput) {
    return isBefore(this, date);
  }

  /**
   * Returns true if the current date is after the given date.
   * @param {DateTimeInput} date - The date to compare to.
   * @returns A boolean.
   */
  public isAfter(date: DateTimeInput) {
    return isAfter(this, date);
  }
  
  /**
   * Returns true if the date is today, false otherwise
   * @returns A boolean value.
   */
  public isToday() {
    return isToday(this);
  }

  /**
   * Returns true if the date is tomorrow.
   * @returns A boolean value.
   */
  public isTomorrow() {
    return isTomorrow(this);
  }

  /**
   * Returns true if the date is yesterday.
   * @returns A boolean value.
   */
  public isYesterday() {
    return isYesterday(this);
  }

  /**
   * Returns true if the date is the same as the date passed in
   * @param {DateTimeInput} date - The date to compare to.
   * @param {DateCompareUnit} unit - The unit to compare.
   * @returns A boolean value.
   */
  public isSame(date: DateTimeInput, unit: DateCompareUnit = DateCompareUnit.DAY) {
    return isSame(this, date, unit);
  }
}


export {
  DateTime
};
