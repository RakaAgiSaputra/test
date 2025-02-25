'use client';

import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size:btnSize;
}

export function SubmitButton({className="",text="submit",size="lg"}:SubmitButtonProps) {
  const {pending } = useFormStatus()

  return <Button type="submit" disabled={pending} className={`capitalize ${className}`} size={size}>
    {pending?<>
    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
    </>:text}
  </Button>
}
