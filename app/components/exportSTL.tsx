// components/ExportSTL.tsx
import { useThree } from "@react-three/fiber";
import { STLExporter } from "three-stdlib";
import { saveAs } from "file-saver";
import * as THREE from "three";

export function ExportSTLButton({ target }: { target: THREE.Object3D }) {
    const { gl } = useThree();

    const handleExport = () => {
        const exporter = new STLExporter();
        const result = exporter.parse(target, { binary: false });

        const blob = new Blob([result], { type: "text/plain" });
        saveAs(blob, "model.stl");
    };

    return (
        <button
            className="h-20 w-20 bg-red-400 z-30"
            onClick={handleExport}
            // style={{ position: "absolute", top: 20, left: 20, zIndex: 100 }}
        >
            Export STL
        </button>
    );
}
