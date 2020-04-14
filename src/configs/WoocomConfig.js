import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const woocomApi =  new WooCommerceRestApi({
    url: "http://smj.kcy.mybluehost.me/woocommerce/",
    consumerKey: "ck_528b9c29dc2e36730812010d30ee15d63c05f8a2",
    consumerSecret: "cs_d655dc10abf894ecc951050640ad66168ccf7949",
    version: "wc/v3"
  });