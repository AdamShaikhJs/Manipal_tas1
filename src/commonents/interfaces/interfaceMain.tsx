export interface Task {
  id: number;
  text: string;
  status: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface TableProps {
  headers: string[];
  data: Array<{
    srNo: number;
    text: string;
    status: string;
    actions: JSX.Element;
  }>;
}

export interface TextareaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number; 
}

export interface StatusDropdownProps {
  value: string;
  onChange: (value: string) => void;
}