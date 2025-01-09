// ========= ID ========= //
const mapping = {
  "%E8%BD%A6%E7%A5%A8%E7%A5%A8": ["vip+watch_vip"],
  Locket: ["Gold"],
};
// =========   Phần cố định  ========= //
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention =
  "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

// Thông tin đăng ký và quyền lợi
var kienmessi = {
  is_sandbox: !1,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-18T01:04:17Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2004-07-03T01:04:18Z",
  purchase_date: "2004-07-03T01:04:17Z",
  store: "app_store",
},
  tongtrankien1605 = {
    grace_period_expires_date: null,
    purchase_date: "2004-07-03T01:04:17Z",
    product_identifier: "com.kienmessi.premium.yearly",
    expires_date: "2099-12-18T01:04:17Z",
  };

// Logic để kiểm tra User-Agent và áp dụng mapping
const match = Object.keys(mapping).find((e) => ua.includes(e));

if (match) {
  let [e, s] = mapping[match];
  if (s) {
    // Nếu có ánh xạ, áp dụng thông tin đăng ký và quyền lợi tương ứng
    tongtrankien1605.product_identifier = s;
    obj.subscriber.subscriptions[s] = kienmessi;
  } else {
    obj.subscriber.subscriptions["com.kienmessi.premium.yearly"] = kienmessi;
  }
  obj.subscriber.entitlements[e] = tongtrankien1605;
} else {
  // Nếu không có match, sử dụng thông tin mặc định
  obj.subscriber.subscriptions["com.kienmessi.premium.yearly"] = kienmessi;
  obj.subscriber.entitlements.pro = tongtrankien1605;
}

$done({ body: JSON.stringify(obj) });
