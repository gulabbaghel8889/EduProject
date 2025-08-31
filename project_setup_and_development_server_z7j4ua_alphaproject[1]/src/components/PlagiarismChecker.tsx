import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Download,
  Eye,
  Search
} from 'lucide-react';

const PlagiarismChecker: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [scanResults, setScanResults] = useState<any[]>([]);
  const [currentScan, setCurrentScan] = useState<any>(null);

  const mockScanResults = [
    {
      id: 1,
      fileName: 'AI_Medical_Diagnosis_Report.pdf',
      scanDate: '2024-12-20',
      plagiarismScore: 15,
      status: 'Completed',
      matches: [
        {
          source: 'IEEE Digital Library',
          similarity: 8.5,
          pages: [2, 3],
          type: 'Academic Paper'
        },
        {
          source: 'ResearchGate Publication',
          similarity: 6.5,
          pages: [5],
          type: 'Research Article'
        }
      ],
      suggestions: [
        'Consider rephrasing sections with high similarity',
        'Add proper citations for referenced methodologies',
        'Ensure original contribution is clearly highlighted'
      ]
    },
    {
      id: 2,
      fileName: 'Blockchain_Credentials_Thesis.docx',
      scanDate: '2024-12-18',
      plagiarismScore: 8,
      status: 'Completed',
      matches: [
        {
          source: 'Academic Repository',
          similarity: 5.2,
          pages: [1],
          type: 'Thesis'
        },
        {
          source: 'Conference Paper',
          similarity: 2.8,
          pages: [8],
          type: 'Conference'
        }
      ],
      suggestions: [
        'Excellent originality score',
        'Minor similarities are within acceptable range',
        'Consider reviewing citation format'
      ]
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploaded'
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const startScan = (fileId: string) => {
    const file = uploadedFiles.find(f => f.id === fileId);
    if (file) {
      setCurrentScan({
        ...file,
        status: 'scanning',
        progress: 0
      });
      
      // Simulate scanning progress
      const interval = setInterval(() => {
        setCurrentScan((prev: any) => {
          if (prev && prev.progress < 100) {
            return { ...prev, progress: prev.progress + 10 };
          } else {
            clearInterval(interval);
            return null;
          }
        });
      }, 500);
    }
  };

  const getSeverityColor = (score: number) => {
    if (score <= 10) return 'text-green-600 bg-green-100';
    if (score <= 25) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getSeverityIcon = (score: number) => {
    if (score <= 10) return CheckCircle;
    if (score <= 25) return AlertTriangle;
    return AlertTriangle;
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Plagiarism Detection</h1>
          <p className="text-lg text-gray-600">
            Advanced AI-powered plagiarism detection to ensure academic integrity and originality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Document</h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Drop your document here or click to browse
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer inline-block"
                >
                  Choose Files
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Supported: PDF, DOC, DOCX, TXT (Max 10MB)
                </p>
              </div>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Uploaded Files</h3>
                <div className="space-y-3">
                  {uploadedFiles.map(file => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{file.name}</p>
                          <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button
                        onClick={() => startScan(file.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                        disabled={currentScan && currentScan.id === file.id}
                      >
                        {currentScan && currentScan.id === file.id ? 'Scanning...' : 'Scan'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {/* Current Scan Progress */}
            {currentScan && (
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Scanning in Progress</h3>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Analyzing: {currentScan.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${currentScan.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{currentScan.progress}% complete</p>
                </div>
                <div className="text-sm text-gray-600">
                  <p>• Checking against academic databases</p>
                  <p>• Analyzing text patterns and similarities</p>
                  <p>• Generating detailed report</p>
                </div>
              </div>
            )}

            {/* Scan Results */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Scan Results</h3>
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search results..."
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                  />
                </div>
              </div>

              {mockScanResults.length === 0 ? (
                <div className="text-center py-12">
                  <Shield className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No scans yet</h4>
                  <p className="text-gray-600">Upload and scan your documents to check for plagiarism</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {mockScanResults.map(result => {
                    const SeverityIcon = getSeverityIcon(result.plagiarismScore);
                    return (
                      <div key={result.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-3">
                            <FileText className="h-6 w-6 text-gray-400 mt-1" />
                            <div>
                              <h4 className="font-medium text-gray-900">{result.fileName}</h4>
                              <p className="text-sm text-gray-500">Scanned on {new Date(result.scanDate).toLocaleDateString()}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${getSeverityColor(result.plagiarismScore)}`}>
                              <SeverityIcon className="h-4 w-4" />
                              <span className="font-medium">{result.plagiarismScore}% Similar</span>
                            </div>
                          </div>
                        </div>

                        {/* Matches */}
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Similar Sources Found:</h5>
                          <div className="space-y-2">
                            {result.matches.map((match: any, index: number) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{match.source}</p>
                                  <p className="text-xs text-gray-600">{match.type} • Pages {match.pages.join(', ')}</p>
                                </div>
                                <span className="text-sm font-medium text-orange-600">{match.similarity}%</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Suggestions */}
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-gray-900 mb-2">Recommendations:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {result.suggestions.map((suggestion: string, index: number) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>{suggestion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                          <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600">
                            <Eye className="h-4 w-4" />
                            <span>View Details</span>
                          </button>
                          <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600">
                            <Download className="h-4 w-4" />
                            <span>Download Report</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlagiarismChecker;
