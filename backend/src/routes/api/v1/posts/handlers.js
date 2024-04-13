import { prisma } from "../../../../adapters.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getAllMessages(req, res) {
    try {
       const messages = await prisma.message.findMany();
       res.status(200).json(messages);
    } catch (error) {
       console.error("Error fetching messages:", error);
       res.status(500).json({ error: "Could not fetch messages" });
    }
}

export async function poMessage(req, res) {
   try {
      const { content } = req.body;
      const username = req.session.username; // 从会话中获取用户ID
      const user = await prisma.user.findUnique({ where: { username: username }, select: { username: true, avatar: true } }); // 查询用户信息
      if (!user) {
         return res.status(404).json({ error: "User not found" });
      }
      const createdMessage = await prisma.message.create({
         data: {
            author: user.username, // 使用用户名作为留言作者
            content,
            avatar: user.avatar // 将用户头像作为留言头像
         }
      });
      res.status(201).json(createdMessage);
   } catch (error) {
      console.error("Error creating message:", error);
      res.status(500).json({ error: "Could not create message" });
   }
}

export async function delMessage(req, res) {
    try {
       const messageId = parseInt(req.params.id);
       await prisma.message.delete({
          where: { id: messageId }
       });
       res.status(204).end();
    } catch (error) {
       console.error("Error deleting message:", error);
       res.status(500).json({ error: "Could not delete message" });
    }
 }