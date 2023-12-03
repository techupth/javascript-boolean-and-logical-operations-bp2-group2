// Exercise #2: Promotion Conditions
// ผู้ซื้อจะได้รับโปรโมชั่นถ้ากรณีข้อใดข้อหนึ่งต่อไปนี้เป็นจริง (ไม่จำเป็นต้องเป็นจริงทั้งสองข้อ)

// กรณีที่ 1: ผู้ซื้อมียอดสั่งซื้อสินค้าจากเดือนที่แล้วมากกว่า 4000 บาท และวันที่ซื้อสินค้าเป็นวันจันทร์ถึงวันศุกร์ และไม่เคยซื้อสินค้าจากหมวดหมู่ IT มาก่อน และไม่เคยเข้าร่วมกิจกรรมมหกรรมลดราคามาก่อน
// กรณีที่ 2 : ผู้ซื้อเป็น Member ในระดับ Platinum

// โดยผู้ซื้อสินค้าคนหนึ่งชื่อว่า John มีคุณสมบัติดังนี้

// มียอดสั่งซื้อเดือนที่แล้ว 4001 บาท
// ไปซื้อของวันศุกร์
// ไม่เคยซื้อของในหมวดหมู่ IT มาก่อน
// เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
// เป็น Member ระดับ Gold

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
