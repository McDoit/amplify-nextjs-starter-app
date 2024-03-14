import { Chip, Divider } from "@mui/material";
import * as React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export interface ChipListProps {
  labels: string[];
  onClick?: (value: string) => void;
  onDelete?: (value: string) => void;
}

export interface GenericChipListProps<T> {
  value?: T;
  items: T[];
  onClick?: (value: T) => void;
  onDelete?: (value: T) => void;
  renderItem: (value: T, index: number) => React.ReactNode;
}

export function ChipList(props: ChipListProps) {
  var [activeChip, setActiveChip] = React.useState<string | null>(null);

  var [labels, setLabels] = React.useState<string[]>(props.labels);

  var jsonItems = JSON.stringify(props.labels);

  React.useEffect(() => {
    console.log("ChipList");
    //console.log(props.labels);
    setLabels(props.labels);
  }, [jsonItems]);

  return (
    <React.Fragment>
      {labels.map((s, i) => (
        <Chip
          variant={activeChip === s ? "chosen" : "outlined"}
          //color={activeChip === s ? "primary" : "default"}
          color={"default"}
          onClick={
            props.onClick
              ? (_) => {
                  setActiveChip(s);
                  props.onClick && props.onClick(s);
                }
              : undefined
          }
          onDelete={
            props.onDelete
              ? (_) => props.onDelete && props.onDelete(s)
              : undefined
          }
          label={s}
          key={i}
        />
      ))}
    </React.Fragment>
  );
}

export function GenericChipList<T>(props: GenericChipListProps<T>) {
  var [activeChip, setActiveChip] = React.useState<T | undefined>(props.value);

  var [items, setItems] = React.useState<T[]>(props.items);

  React.useEffect(() => {
    //console.log("ChipList");
    //console.log(props.labels);
    setItems(props.items);
  }, [JSON.stringify(props.items)]);

  return (
    <React.Fragment>
      {items.map((s, i) => (
        <Chip
          variant={activeChip === s ? "chosen" : "outlined"}
          //color={activeChip === s ? "primary" : "default"}
          color={"default"}
          onClick={
            props.onClick
              ? (_) => {
                  setActiveChip(s);
                  props.onClick && props.onClick(s);
                }
              : undefined
          }
          onDelete={
            props.onDelete
              ? (_) => {
                  //console.log("onDelete");
                  props.onDelete && props.onDelete(s);
                }
              : undefined
          }
          label={props.renderItem(s, i)}
          key={i}
        />
      ))}
    </React.Fragment>
  );
}
