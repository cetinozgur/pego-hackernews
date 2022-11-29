import { model, Schema } from "mongoose";

export interface IFavorite {
  email: string;
  favorites: Array<string>;
}

// 2. Create a Schema corresponding to the document interface.
const favoriteSchema = new Schema<IFavorite>({
  email: { type: String, required: true },
  favorites: Array<string>,
});

// 3. Create a Model.
export const Favorite = model<IFavorite>("Favorite", favoriteSchema);
