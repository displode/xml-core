interface IXmlSerializable {

    Prefix: string;
    /**
     * Writes object to XML node
     * @returns Node
     */
    GetXml(): Node;
    /**
     * Reads XML from string
     * @param  {Node} node
     * @returns void
     */
    LoadXml(node: Node): void;
}

interface AssocArray<T> {
    [index: string]: T;
}

declare type XmlBufferEncoding = string | "utf8" | "binary" | "hex" | "base64" | "base64url";

declare type ISelectResult = Array<Node> | Node | boolean | number | string;

interface XmlNamespace {
    prefix: string | null;
    namespace: string | null;
}