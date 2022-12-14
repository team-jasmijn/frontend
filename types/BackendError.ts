type BackendErrors =
  | string
  | {
      [field: string]: {
        errors: BackendError[];
        validationState: number;
        isContainerNode: boolean;
      };
    };

interface BackendError {
  errorMessage: string;
}
