// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;
let hasPromotion;

// my code
// get promo if buy more than 4000, weekday, never buy from IT
// or member = plat

//john
lastMonthPaidMoreThan4000 = true; // purchase amount 4001
isWeekday = true; // bought on Friday
hasBoughtProductFromITCategory = false; // never
hasAttendedDiscountEvent = true; // joined at the second event.
isPlatinum = false; // gold

// result
hasPromotion =
  (lastMonthPaidMoreThan4000 && isWeekday && !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
