import {Link} from '../link';

export class DeckLinkByCategory {

  public deckId: number;
  public name: String;
  public description: String;
  public rating: number;
  public self: Link;
  public cards: Link;
  public hidden: boolean;

  constructor(name: String, description: String, rating: number, self: Link, cards: Link, deckId: number, hidden: boolean) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.self = self;
    this.cards = cards;
    this.deckId = deckId;
    this.hidden = hidden;
  }
}
