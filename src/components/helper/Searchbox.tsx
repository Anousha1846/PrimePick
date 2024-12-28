import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";

const Searchbox = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Search size={22} cursor={"pointer"} className="mt-1" />
        </DialogTrigger>
        <DialogContent>
          <form>
            <input
              type="text"
              placeholder="Search Your Product"
              className="block w-full bg-gray-100 border rounded-lg px-6 py-2 mt-4 outline-none "
            />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Searchbox;
