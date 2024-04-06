import { prisma } from "../../../../adapters.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function logoutCheck(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.error("登出時發生錯誤：", err);
        return res.status(500).json({ isLoggedIn: true });
      } else {
        // 登出成功，重定向到首頁或其他目標頁面
        return res.status(200).json({ isLoggedIn: false });
      }
    });
}