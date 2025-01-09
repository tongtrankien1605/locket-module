// locketGold.js

const mapping = {
  'Locket': ['Gold']
};

let ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
let response = JSON.parse($response.body);

// Thêm thông báo
response.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

// Logic kích hoạt Gold dựa trên User-Agent
const match = Object.keys(mapping).find(key => ua.includes(key));
if (match) {
  response.subscriber = {
    original_app_user_id: "locket_user_12345",
    subscriptions: {
      "locket.gold": {
        billing_issues_detected_at: null,
        expires_date: "2099-12-31T23:59:59Z",
        is_sandbox: false,
        original_purchase_date: "2023-01-01T00:00:00Z",
        ownership_type: "PURCHASED",
        period_type: "lifetime",
        purchase_date: "2023-01-01T00:00:00Z",
        store: "app_store",
      },
    },
    entitlements: {
      gold: {
        expires_date: "2099-12-31T23:59:59Z",
        product_identifier: "locket.gold",
        purchase_date: "2023-01-01T00:00:00Z",
      },
    },
  };
} else {
  // Nếu không khớp User-Agent, giữ nguyên phản hồi gốc
  response.subscriber = response.subscriber || {};
}

$done({ body: JSON.stringify(response) });
