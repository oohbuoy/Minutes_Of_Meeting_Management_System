// Live meeting data - Digital Public Infrastructure Strategy
const liveMeetings = [
    {
        id: 'dpi-strategy-070725',
        filename: 'Minutes_of_the_Meeting_03072025.xlsx',
        upload_date: '2025-07-07T10:30:00Z',
        record_count: 7,
        title: 'DIGITAL PUBLIC INFRASTRUCTURE STRATEGY',
        subtitle: 'Netweb Technologies India Ltd. & Infosys Collaboration | 7 July 2025'
    }
];

const liveMeetingData = {
    'dpi-strategy-070725': {
        meeting: {
            id: 'dpi-strategy-070725',
            filename: 'Minutes_of_the_Meeting_03072025.xlsx',
            upload_date: '2025-07-07T10:30:00Z',
            title: 'DIGITAL PUBLIC INFRASTRUCTURE STRATEGY',
            subtitle: 'Netweb Technologies India Ltd. & Infosys Collaboration | 7 July 2025',
            description: 'On 7 July 2025 Netweb convened its core expert team to explore the future of Digital Public Infrastructure with energy and optimism. Swastik Sir opened the session by painting a compelling vision for secure, scalable and user-centric digital services. Sanjay Sir offered encouragement and strategic perspective, setting the tone for an engaged, solution-oriented dialogue. Mukesh Sir and Vivek Sir joined alongside Infosys collaborators to weave together four complementary themes into a unified roadmap.'
        },
        data: [
            {
                description: 'Digital Public Infrastructure: Deployment for Governments: Government Business - A project highlights refers to foundational, interoperable digital systems and platforms that enable essential public and private services at population scale. Systems that provide individuals with a verifiable and unique digital identity. Sri Lanka is actively advancing its Digital Public Infrastructure (DPI) initiatives, with significant developments in digital identity and payment systems. Target Countries: Sri Lanka, Indonesia, Philippines, East Europe, Middle East and Africa. Highlights of a Specific project: Sri Lanka Unique Digital Identity (SL-UDI) Project - Objective: Establish a foundational digital identity system to enhance access to public and private services. Platform: Utilizes the Modular Open-Source Identity Platform (MOSIP), developed in India. Procurement: The Government of India, through the National Institute for Smart Government (NISG), has issued a Request for Proposals (RFP) on behalf of Sri Lanka to select a Master System Integrator (MSI) for the SL-UDI project. Timeline: Pre-qualification bids: Due by August 8, 2025, Technical and financial bids: Due by October 8, 2025. Eligibility: Open to Indian companies with proven technical and financial capabilities. Next Steps: Post-RFP, a digital ID sandbox is expected to launch within 3–4 months, allowing stakeholders to engage with and assess the open digital ID platform.',
                actionItems: 'MOSIP certification for Netweb HARDWARE',
                actionOwnership: 'Swastik, Vivek',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Plan to meet Prof Das on 10th July'
            },
            {
                description: 'Center of Excellence for testing and qualifying DPI software and Network. Build a Latest Configuration of Skylus setup at Infosys Hubli Campus with 6 Numbers of Cloud Node and 2 Number of Compute Nodes each with 2 Numbers of H200 NVL GPU with 3 Cloud Controllers and related Switches and Racks for Cloud IN a Rack Solution',
                actionItems: 'Center of Excellence for testing and qualifying DPI software and Network. Build a Latest Configuration of Skylus setup at Infosys Hubli Campus with 6 Numbers of Cloud Node and 2 Number of Compute Nodes each with 2 Numbers of H200 NVL GPU with 3 Cloud Controllers and related Switches and Racks for Cloud IN a Rack Solution',
                actionOwnership: 'Mukesh, Swastik, Sanjay',
                startDate: '2025-07-07',
                endDate: '2025-09-07',
                remarks: ''
            },
            {
                description: 'Joint Solution Architecture Development - Collaborative development between Infosys and Netweb Technologies for comprehensive DPI solutions',
                actionItems: 'Joint Solution Architecture Development',
                actionOwnership: 'Infosys, Netweb',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Schedule Bi Weekly Call with Infosys execution Team. AB to identify the POC'
            },
            {
                description: 'Providing access to Bangalore Skylus Cluster for increasing familiarity of Skylus platform and enhancing team capabilities',
                actionItems: 'Providing access to Bangalore Skylus Cluster for increasing familiarity of Skylus',
                actionOwnership: 'Swastik',
                startDate: '2025-07-07',
                endDate: '2025-07-07',
                remarks: 'MAIL Initiated on 07072025'
            },
            {
                description: 'Digital Public Infrastructure: Consumption of Service: Business Network Builder - Designing a DPI Consumer Architecture involves creating a structured framework that allows users, platforms, and institutions to seamlessly consume services offered by Digital Public Infrastructure (DPI). A well-architected DPI consumer system should ensure interoperability, modularity, scalability, security, and privacy by design. The idea is to build the network and allowing Enterprises to build solutions to leverage the power of the network. One such example for education vertical can be imagined to deliver the following: Learner Journey - Login with Aadhaar Equivalent/mobile (User authentication, verified profiles), Browse DIKSHA/ONEST (Content discovery and delivery) content for a career path (e.g., Web Developer), Take online courses and assessments (Payment for certification, internships, job applications), Earn verified credentials pushed to DigiLocker(Credential storage and verification)/ABC (Academic Bank of Credit), Explore job listings on ONDC (Job discovery and matchmaking) via job portal integration, Apply with verified profile + credits + assessments. Employer Journey - Login and verify company, Post job roles (mapped to NSQF/job codes) (National Skills Qualifications Framework (NSQF)), View matching candidates with verified skills/certificates, Schedule interviews via portal, Give job offers that trigger automated tracking',
                actionItems: 'Joint Solution Development',
                actionOwnership: 'Infosys + Netweb',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Schedule Bi Weekly Call with Infosys execution Team. AB to identify the POC'
            },
            {
                description: 'Digital Public Infrastructure: Consumption of Service: Enterprise Consuming the NETWORK - Enterprises are building business models that leverage Digital Public Infrastructure (DPI) — specifically from the lens of enterprises consuming DPI as a network service layer. These models are relevant across sectors like finance, education, commerce, healthcare, and mobility. Enterprises plug into DPI layers (like identity, payments, data sharing, or commerce protocols) to offer services without building foundational infrastructure themselves. Instead, they consume shared, government-backed or community-managed infrastructure to: Reduce costs, Accelerate go-to-market, Focus on innovation at the service layer, Core DPI Layers Enterprises. The core DPI services offered includes Identity (Identity verification, document access), Payments (Seamless payment integration), Consent/Data (Consent-based data sharing (finance, health, education)), Commerce (Product discovery, order fulfillment), Skilling/Education (Course content, credit verification, certification) Mobility (Booking and routing in federated transit systems). Examples Include: 1) Fintechs via Account Aggregator + UPI - LendingKart, KreditBee, INDmoney, and others use AA+eKYC+DPI to offer instant credit products. 2) EdTechs via ONEST + NAD + ABC - An EdTech startup builds an app that pulls skilling modules from ONEST, verifies completion via ABC, and generates DigiLocker-stored certificates. 3) eCommerce Platforms via ONDC - Magicpin, SellerApp, Snapdeal, and others join ONDC as buyer/seller apps, Retail ERP companies integrate ONDC APIs for catalog sync and payment processing. 4) Mobility Startups via Beckn Protocol (e.g., Namma Yatri) - Juspay\'s Namma Yatri allows drivers and passengers to match and transact without a central aggregator, Local mobility startups build services on Beckn and plug into ONDC for payments/logistics.',
                actionItems: 'Joint Solution Development',
                actionOwnership: 'Infosys + Netweb',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Schedule Bi Weekly Call with Infosys execution Team. AB to identify the POC'
            },
            {
                description: 'DPI centric WORKLOAD Characteristics and Optimization - To drive optimum workload performance for Digital Public Infrastructure (DPI) systems — particularly in identity (e.g., MOSIP), consent management (e.g., DEPA), commerce (e.g., ONDC), finance (e.g., UPI/AA), and their interconnection with Value-Added Services (VAS) — a deep, technical and layered optimization strategy is essential. Optimization shall include and not limited to: 1) CPU, MEMORY, Storage, I/O Tuning. 2) Programming Language and Run time selection. 3) Choice of Frameworks, Libraries and Patterns. 4) Benchmarking tools and their KPIs. 5) Security Performance Considerations. 6) MOSIP-Specific Benchmarking & Optimization Practices. Establish DPI Performance Optimization Pyramid: [ Level 5 ] DPI Benchmark Harnesses (MOSIP, Sahamati, ONDC test suites), [ Level 4 ] Runtime tuning (GC, threads, batching, cold-start elimination), [ Level 3 ] Language + Libraries (Rust, Go, gRPC, Kafka, SIMD libs), [ Level 2 ] Software Architecture (async pipelines, microservices, stateless scaling), [ Level 1 ] Hardware Optimization (NUMA, AVX, cache alignment, I/O schedulers)',
                actionItems: 'Workload Optimization Support',
                actionOwnership: 'Infosys + Netweb',
                startDate: '2025-07-07',
                endDate: '',
                remarks: 'Schedule Bi Weekly Call with Infosys execution Team. AB to identify the POC'
            }
        ]
    }
};

// Global variables
let currentUser = null;
let currentMeetingId = null;
let meetings = [];
let isTableView = false;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    fadeInPage('loginScreen');
    loadMeetingsFromLive();
    
    // Setup upload area click handler
    const uploadArea = document.getElementById('uploadArea');
    if (uploadArea) {
        uploadArea.addEventListener('click', () => {
            if (currentUser === 'admin') {
                document.getElementById('fileInput').click();
            }
        });
    }
    
    // Close modal when clicking outside
    const uploadModal = document.getElementById('uploadModal');
    if (uploadModal) {
        uploadModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeUploadModal();
            }
        });
    }
});

// Page transition functions
function fadeInPage(pageId) {
    setTimeout(() => {
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('fade-in');
        }
    }, 100);
}

function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}

function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}

function transitionToPage(fromId, toId, callback) {
    showSpinner();
    
    const fromPage = document.getElementById(fromId);
    fromPage.classList.remove('fade-in');
    
    setTimeout(() => {
        fromPage.style.display = 'none';
        const toPage = document.getElementById(toId);
        toPage.style.display = fromId === 'loginScreen' ? 'block' : 'flex';
        
        if (toId === 'mainApp') {
            document.body.classList.add('app-mode');
        } else {
            document.body.classList.remove('app-mode');
        }
        
        setTimeout(() => {
            hideSpinner();
            fadeInPage(toId);
            if (callback) callback();
        }, 300);
    }, 300);
}

// Authentication functions
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        loginAs('admin');
    }
}

function showAdminForm() {
    const adminForm = document.getElementById('adminForm');
    adminForm.style.display = 'block';
    setTimeout(() => {
        adminForm.classList.add('show');
        document.getElementById('adminPassword').focus();
    }, 10);
}

function loginAs(role) {
    if (role === 'admin') {
        const password = document.getElementById('adminPassword').value;
        if (password !== '82201Domeyo@') {
            showNotification('Invalid admin password!', 'error');
            return;
        }
    }
    
    currentUser = role;
    transitionToPage('loginScreen', 'mainApp', () => {
        document.getElementById('userRole').textContent = role === 'admin' ? 'Administrator' : 'Guest';
        
        // Show/hide admin controls
        if (role === 'admin') {
            document.getElementById('uploadBtn').style.display = 'flex';
            document.getElementById('exportBtn').style.display = 'flex';
        }
        
        // Show only card grid, no auto-expand
        loadMeetings();
        showNotification(`Welcome ${role === 'admin' ? 'Administrator' : 'Guest'}! Access granted to Digital Public Infrastructure system.`);
    });
}

function logout() {
    currentUser = null;
    currentMeetingId = null;
    isTableView = false;
    
    transitionToPage('mainApp', 'loginScreen', () => {
        document.getElementById('adminForm').style.display = 'none';
        document.getElementById('adminForm').classList.remove('show');
        document.getElementById('adminPassword').value = '';
    });
}

// Data functions
function loadMeetingsFromLive() {
    meetings = [...liveMeetings];
}

function loadMeetings() {
    showSpinner();
    
    setTimeout(() => {
        loadMeetingsFromLive();
        displayMeetings();
        isTableView = false;
        document.getElementById('backBtn').style.display = 'none';
        hideSpinner();
    }, 800);
}

function displayMeetings() {
    const contentArea = document.getElementById('contentArea');
    
    if (meetings.length === 0) {
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 80px 20px; color: #718096;">
                <div style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(20px); border-radius: 24px; padding: 60px 40px; border: 2px solid rgba(102, 126, 234, 0.1); position: relative; overflow: hidden;">
                    <i class="fas fa-clipboard-list" style="font-size: 64px; color: #cbd5e0; margin-bottom: 24px; animation: pulse 2s ease-in-out infinite;"></i>
                    <h3 style="color: #4a5568; margin-bottom: 16px; font-size: 24px;">No meetings found</h3>
                    <p style="color: #718096; font-size: 16px; line-height: 1.6;">Upload your first Excel file to get started with the MoM system</p>
                    ${currentUser === 'admin' ? `
                        <button class="btn" onclick="showUploadModal()" style="margin-top: 24px; animation: slideUp 0.8s ease-out 0.5s both;">
                            <i class="fas fa-plus"></i> Upload Meeting
                        </button>
                     ` : ''}
                </div>
            </div>
        `;
        return;
    }
    
    contentArea.innerHTML = `
        <div style="margin-bottom: 32px;">
            <h2 style="font-size: 28px; font-weight: 700; color: #2d3748; margin-bottom: 8px; display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-database" style="color: #667eea;"></i>
                Digital Public Infrastructure Repository
            </h2>
            <p style="color: #718096; font-size: 16px;">
                ${meetings.length} strategic meeting${meetings.length !== 1 ? 's' : ''} • Netweb Technologies India Ltd. & Infosys Collaboration
            </p>
        </div>
        
        <div class="meetings-grid">
            ${meetings.map((meeting, index) => `
                <div class="meeting-card-enhanced" style="animation-delay: ${index * 0.1}s;" onclick="viewMeeting('${meeting.id}')">
                    <div class="meeting-card-header" onclick="event.stopPropagation(); toggleMeetingView('${meeting.id}')">
                        <div class="meeting-icon">
                            <i class="fas fa-network-wired"></i>
                        </div>
                        <div class="meeting-title-section">
                            <h3 class="meeting-title">${meeting.title || meeting.filename}</h3>
                            <p style="font-size: 13px; color: #667eea; font-weight: 600; margin: 4px 0;">${meeting.subtitle || 'Strategic Planning Session'}</p>
                            <div class="meeting-metadata">
                                <span class="metadata-item">
                                    <i class="fas fa-calendar"></i>
                                    ${new Date(meeting.upload_date).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'short', 
                                        day: 'numeric' 
                                    })}
                                </span>
                                <span class="metadata-item">
                                    <i class="fas fa-list-ol"></i>
                                    ${meeting.record_count} action items
                                </span>
                                <span class="metadata-item">
                                    <i class="fas fa-handshake"></i>
                                    Infosys × Netweb
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="meeting-actions">
                        <button class="action-btn primary" onclick="event.stopPropagation(); viewMeeting('${meeting.id}')">
                            <i class="fas fa-eye"></i>
                            <span>View Details</span>
                        </button>
                        ${currentUser === 'admin' ? `
                        <button class="action-btn secondary" onclick="event.stopPropagation(); exportMeeting('${meeting.id}')">
                            <i class="fas fa-download"></i>
                            <span>Export Data</span>
                        </button>
                         ` : ''}
                    </div>
                    
                    <div class="meeting-stats">
                        <div class="stat-item">
                            <span class="stat-label">Status</span>
                            <span class="stat-value active">Active</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Priority</span>
                            <span class="stat-value">High</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="margin-top: 40px; text-align: center; animation: fadeIn 1s ease-out 0.8s both;">
            <div style="background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(15px); border-radius: 16px; padding: 20px; border: 1px solid rgba(102, 126, 234, 0.1); display: inline-block;">
                <p style="color: #718096; font-size: 14px; margin: 0;">
                    <i class="fas fa-shield-alt" style="color: #48bb78; margin-right: 8px;"></i>
                    Secure • Strategic • Made in India 🇮🇳
                </p>
                <p style="color: #a0aec0; font-size: 12px; margin-top: 8px;">
                    <i class="fas fa-building" style="margin-right: 4px;"></i>
                    Collaborative strategic planning between leading technology partners
                </p>
            </div>
        </div>
    `;
}

function toggleMeetingView(meetingId) {
    if (isTableView && currentMeetingId === meetingId) {
        backToDashboard();
    } else {
        viewMeeting(meetingId);
    }
}

function viewMeeting(meetingId) {
    showSpinner();
    
    setTimeout(() => {
        const data = liveMeetingData[meetingId];
        if (data) {
            currentMeetingId = meetingId;
            displayMeetingTable(data);
            isTableView = true;
            document.getElementById('backBtn').style.display = 'flex';
        } else {
            showNotification('Meeting data not available', 'error');
        }
        hideSpinner();
    }, 1000);
}

function backToDashboard() {
    showSpinner();
    setTimeout(() => {
        displayMeetings();
        isTableView = false;
        currentMeetingId = null;
        document.getElementById('backBtn').style.display = 'none';
        hideSpinner();
        showNotification('Returned to dashboard');
    }, 500);
}

// Text processing function to add line breaks after full stops
function formatCellText(text) {
    if (!text || typeof text !== 'string') return text;
    
    // Add line breaks after full stops followed by a space and capital letter
    return text.replace(/\. ([A-Z])/g, '.<br><br>$1')
               .replace(/: ([A-Z])/g, ':<br>$1');
}

function displayMeetingTable(data) {
    const contentArea = document.getElementById('contentArea');
    
    // Show enhanced loading animation first
    contentArea.innerHTML = `
        <div class="table-wrapper">
            <div class="table-header">
                <div onclick="backToDashboard()" style="cursor: pointer;">
                    <h2 style="font-size: 20px; font-weight: 700;">${data.meeting.title || 'Minutes of Meeting'}</h2>
                    <p style="font-size: 14px; opacity: 0.9;">${data.meeting.subtitle || data.meeting.filename} • ${new Date(data.meeting.upload_date).toLocaleDateString()}</p>
                </div>
                <div style="font-size: 14px; opacity: 0.9;">
                    <span class="status-indicator processing">
                        Optimizing Layout
                    </span>
                </div>
            </div>
            
            <div class="table-container-inner">
                <div style="padding: 20px;">
                    <div style="text-align: center; margin-bottom: 24px; color: #667eea;">
                        <i class="fas fa-cogs" style="font-size: 32px; margin-bottom: 12px; animation: spin 2s linear infinite;"></i>
                        <p style="font-size: 16px; font-weight: 600;">Analyzing content and optimizing table layout...</p>
                        <p style="font-size: 14px; color: #718096; margin-top: 4px;">Calculating optimal column widths based on content length</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // After a brief moment, show the actual table with animations
    setTimeout(() => {
        const tableHTML = `
            <div class="table-wrapper">
                <div class="table-header">
                    <div onclick="backToDashboard()" style="cursor: pointer;">
                        <h2 style="font-size: 20px; font-weight: 700;">${data.meeting.title || 'Minutes of Meeting'}</h2>
                        <p style="font-size: 14px; opacity: 0.9;">${data.meeting.subtitle || data.meeting.filename} • ${new Date(data.meeting.upload_date).toLocaleDateString()}</p>
                    </div>
                    <div style="font-size: 14px; opacity: 0.9;">
                        <i class="fas fa-database" style="margin-right: 8px;"></i>
                        ${data.data.length} action items
                    </div>
                </div>
                
                ${data.meeting.description ? `
                <div style="background: rgba(255, 255, 255, 0.95); padding: 24px; border-bottom: 1px solid rgba(102, 126, 234, 0.1);">
                    <p style="color: #4a5568; line-height: 1.7; font-size: 14px; margin: 0; text-align: justify;">${formatCellText(data.meeting.description)}</p>
                </div>
                 ` : ''}
                
                <div class="table-container-inner">
                    <table class="mom-table">
                        <thead>
                            <tr>
                                <th style="min-width: 300px;">
                                    <i class="fas fa-file-text" style="margin-right: 8px; color: #667eea;"></i>
                                    Description
                                </th>
                                <th style="min-width: 250px;">
                                    <i class="fas fa-tasks" style="margin-right: 8px; color: #667eea;"></i>
                                    Action Items
                                </th>
                                <th style="min-width: 150px;">
                                    <i class="fas fa-users" style="margin-right: 8px; color: #667eea;"></i>
                                    Action Ownership
                                </th>
                                <th style="min-width: 120px;">
                                    <i class="fas fa-calendar-plus" style="margin-right: 8px; color: #667eea;"></i>
                                    Start Date
                                </th>
                                <th style="min-width: 120px;">
                                    <i class="fas fa-calendar-check" style="margin-right: 8px; color: #667eea;"></i>
                                    End Date
                                </th>
                                <th style="min-width: 200px;">
                                    <i class="fas fa-comment-alt" style="margin-right: 8px; color: #667eea;"></i>
                                    Remarks/Challenges
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.data.map((row, index) => `
                                <tr style="animation-delay: ${index * 0.1}s;">
                                    <td>
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.1}s;">
                                            ${formatCellText(row.description) || '<span style="color: #cbd5e0; font-style: italic;">No description available</span>'}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.2}s;">
                                            ${formatCellText(row.actionItems) || '<span style="color: #cbd5e0; font-style: italic;">No action items specified</span>'}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.3}s;">
                                            ${formatCellText(row.actionOwnership) || '<span style="color: #cbd5e0; font-style: italic;">Unassigned</span>'}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.4}s;">
                                            ${formatDate(row.startDate) || '<span style="color: #cbd5e0; font-style: italic;">Not set</span>'}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.5}s;">
                                            ${formatDate(row.endDate) || '<span style="color: #cbd5e0; font-style: italic;">Not set</span>'}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="cell-content" style="animation-delay: ${index * 0.1 + 0.6}s;">
                                            ${formatCellText(row.remarks) || '<span style="color: #cbd5e0; font-style: italic;">No remarks</span>'}
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div style="margin-top: 24px; text-align: center; padding: 20px;">
                <button class="btn" onclick="backToDashboard()" style="animation: slideUp 0.8s ease-out 1s both;">
                    <i class="fas fa-arrow-left"></i> Back to Meetings
                </button>
                <div style="margin-top: 16px; font-size: 12px; color: #718096; animation: fadeIn 1s ease-out 1.2s both;">
                    <i class="fas fa-info-circle"></i> 
                    Table optimized for content • Strategic planning documentation
                </div>
            </div>
        `;
        
        contentArea.innerHTML = tableHTML;
        
        // Add intersection observer for progressive loading
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        // Observe all table rows
        setTimeout(() => {
            document.querySelectorAll('.mom-table tbody tr').forEach(row => {
                observer.observe(row);
            });
        }, 100);
        
    }, 1200);
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Upload functions (demo mode)
function showUploadModal() {
    if (currentUser !== 'admin') return;
    const modal = document.getElementById('uploadModal');
    modal.style.display = 'flex';
}

function closeUploadModal() {
    const modal = document.getElementById('uploadModal');
    modal.style.display = 'none';
}

function handleFileUpload(event) {
    if (currentUser !== 'admin') return;
    
    const file = event.target.files[0];
    if (!file) return;
    
    showSpinner();
    
    setTimeout(() => {
        showNotification('File upload feature requires backend integration. Current system displays stored meeting data.', 'warning');
        closeUploadModal();
        hideSpinner();
        event.target.value = '';
    }, 2000);
}

// Export functions (demo mode)
function exportMeeting(meetingId) {
    if (currentUser !== 'admin') {
        showNotification('Export is restricted to administrators only!', 'error');
        return;
    }
    
    showSpinner();
    
    setTimeout(() => {
        try {
            // Get the meeting data
            const meetingData = liveMeetingData[meetingId];
            
            if (!meetingData) {
                showNotification('Meeting data not found for export', 'error');
                hideSpinner();
                return;
            }
            
            // Create comprehensive CSV content
            let csvContent = '';
            
            // Add header information
            csvContent += `"${meetingData.meeting.title || 'Minutes of Meeting'}"\n`;
            csvContent += `"${meetingData.meeting.subtitle || ''}"\n`;
            if (meetingData.meeting.description) {
                csvContent += `"${meetingData.meeting.description}"\n`;
            }
            csvContent += '\n';
            
            // Add column headers
            csvContent += 'Description,Action Items,Action Ownership,Start Date,End Date,Remarks\n';
            
            // Add data rows
            meetingData.data.forEach(row => {
                const description = (row.description || '').replace(/"/g, '""');
                const actionItems = (row.actionItems || '').replace(/"/g, '""');
                const actionOwnership = (row.actionOwnership || '').replace(/"/g, '""');
                const startDate = row.startDate || '';
                const endDate = row.endDate || '';
                const remarks = (row.remarks || '').replace(/"/g, '""');
                
                csvContent += `"${description}","${actionItems}","${actionOwnership}","${startDate}","${endDate}","${remarks}"\n`;
            });
            
            // Create and download the file
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `DPI_Strategy_Export_${new Date().toISOString().split('T')[0]}.csv`;
            
            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up
            window.URL.revokeObjectURL(url);
            
            showNotification('Strategic planning data exported successfully!');
        } catch (error) {
            console.error('Export error:', error);
            showNotification('Export failed. Please try again.', 'error');
        }
        
        hideSpinner();
    }, 1000);
}

function exportCurrentMeeting() {
    if (currentMeetingId) {
        exportMeeting(currentMeetingId);
    } else {
        showNotification('Please select a meeting first', 'error');
    }
}

function downloadTemplate() {
    // Create a sample template CSV for demo
    const templateContent = `Description,Action Items,Action Ownership,Start Date,End Date,Remarks
"Enter detailed description of the discussion point here","List specific action items to be completed","Assign responsible person or team","YYYY-MM-DD","YYYY-MM-DD","Add any remarks or challenges"
"Example: Review Q4 financial performance","Prepare financial report for board meeting","CFO Team","2025-01-10","2025-01-25","High priority - Board presentation scheduled"`;
    
    const blob = new Blob([templateContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'netweb_mom_template_demo.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    showNotification('Demo template downloaded! In production, this would be an Excel template.');
}

// Notification function with auto-hide and close button
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    // Auto-hide after 6 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 6000);
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
}