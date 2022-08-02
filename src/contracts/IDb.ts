export type DatabaseType<Type, Item> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    item: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Remove`]?: (
    item: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Update`]?: (
    item: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `add${Capitalize<string & Property>}`]: (
    item: Item
  ) => Item;
} & {
  [Property in keyof Type as `remove${Capitalize<string & Property>}`]: (
    item: Item
  ) => boolean;
} & {
  [Property in keyof Type as `update${Capitalize<string & Property>}`]: (
    item: Item
  ) => boolean;
} & {
  [Property in keyof Type as `get${Capitalize<string & Property>}List`]: () => Item[];
}& {
  [Property in keyof Type as `get${Capitalize<string & Property>}ById`]: (
    id: number
  ) => Item;
};
export type OptionsFlag<Type> = {
  [Property in keyof Type]: null;
};

export default interface IDb{
    // db:DatabaseType<T,K> | null
    connect:(connectionstring:string)=>boolean
}