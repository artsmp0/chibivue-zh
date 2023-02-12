import { Component } from "~/src/type/component";
import { VNodeData } from "~/src/type/vnode";

export class VNode {
  tag?: string;
  data?: VNodeData;
  children?: Array<VNode> | null;
  text?: string;
  context?: Component;

  constructor(
    tag?: string,
    data?: VNodeData,
    children?: Array<VNode> | null,
    text?: string,
    context?: Component
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.context = context;
  }
}

export function createTextVNode(val: string | number) {
  return new VNode(undefined, undefined, undefined, String(val));
}