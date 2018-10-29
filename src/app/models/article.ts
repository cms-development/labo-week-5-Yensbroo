export class Article {
  id?: Number;
  type: String = "node--article";
  attributes: Attributes;
}

export class Attributes {
  title: String;
  body: Body;
}

export class Body {
  value: String;
}
