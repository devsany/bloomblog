import { books_api } from "../../BOOKS_API";
export default function handler(req, res) {
  res.status(200).json(books_api);
}
