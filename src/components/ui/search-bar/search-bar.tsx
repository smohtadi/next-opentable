import Form from "@/components/ui/form/form";
import Button from "@/components/ui/button/button";
import { SearchIcon } from "lucide-react";
import clsx from "clsx";
import { FormEvent } from "react";

interface IProps {
  onSubmit?: (term: string) => void;
  className?: string;
}

export default function SearchBar({ onSubmit, className }: IProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("search") as HTMLInputElement | null;
    const term = input?.value?.trim();
    if (!term || term.length === 0) return;
    onSubmit?.(term);
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className={clsx(className)}
    >
      <Form.Input name="search" type="text" />
      <Button variant="secondary">
        <SearchIcon />
      </Button>
    </Form>
  );
}
