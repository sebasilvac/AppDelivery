export interface Store {
  id:          number;
  name:        string;
  description: string;
  slug:        string;
}

export interface User {
  id?:        number;
  fullName:   string;
  email:      string;
  password:   string;
  sessionToken?: string;
  roles:     string[];
  stores?:    any[];
  profilImg?: string;
}